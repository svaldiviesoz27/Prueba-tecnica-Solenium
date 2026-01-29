import { useEffect } from 'react'
import type { Character } from '../../types/rickAndMorty'
import { getStatusColor, getStatusText } from '../../utils/statusHelpers'
import { XIcon } from '../Icons/Icons'

interface CharacterModalProps {
    character: Character
    onClose: () => void
}

export const CharacterModal = ({ character, onClose }: CharacterModalProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [onClose])

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    className="modal__close"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <XIcon size={20} />
                </button>

                <div className="modal__content">
                    <div className="modal__image-wrapper">
                        <img
                            src={character.image}
                            alt={character.name}
                            className="modal__image"
                        />
                        <div
                            className="modal__status-badge"
                            style={{ backgroundColor: getStatusColor(character.status) }}
                        >
                            <span className="modal__status-dot" />
                            {getStatusText(character.status)}
                        </div>
                    </div>

                    <div className="modal__info">
                        <h2 className="modal__title">{character.name}</h2>

                        <dl className="modal__details">
                            <div className="modal__detail-item">
                                <dt>Species</dt>
                                <dd>{character.species || 'Unknown'}</dd>
                            </div>

                            {character.type && (
                                <div className="modal__detail-item">
                                    <dt>Type</dt>
                                    <dd>{character.type}</dd>
                                </div>
                            )}

                            <div className="modal__detail-item">
                                <dt>Gender</dt>
                                <dd>{character.gender || 'Unknown'}</dd>
                            </div>

                            <div className="modal__detail-item">
                                <dt>Origin</dt>
                                <dd>{character.origin?.name || 'Unknown'}</dd>
                            </div>

                            <div className="modal__detail-item">
                                <dt>Last Location</dt>
                                <dd>{character.location?.name || 'Unknown'}</dd>
                            </div>

                            <div className="modal__detail-item">
                                <dt>Episodes</dt>
                                <dd>{character.episode?.length || 0} appearances</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
