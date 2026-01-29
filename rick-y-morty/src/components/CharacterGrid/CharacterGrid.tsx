import type { Character } from '../../types/rickAndMorty'
import { getStatusColor, getStatusText } from '../../utils/statusHelpers'
import { LazyImage } from '../LazyImage/LazyImage'

interface CharacterGridProps {
    characters: Character[]
    onSelectCharacter: (character: Character) => void
}

export const CharacterGrid = ({ characters, onSelectCharacter }: CharacterGridProps) => {
    return (
        <div className="character-grid">
            {characters.map((character) => (
                <article
                    key={character.id}
                    className="character-grid-card"
                    onClick={() => onSelectCharacter(character)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            onSelectCharacter(character)
                        }
                    }}
                >
                    <div className="character-grid-card__image-wrapper">
                        <LazyImage
                            src={character.image}
                            alt={character.name}
                            className="character-grid-card__image"
                        />
                        <div
                            className="character-grid-card__status"
                            style={{ backgroundColor: getStatusColor(character.status) }}
                        >
                            {getStatusText(character.status)}
                        </div>
                    </div>
                    <div className="character-grid-card__content">
                        <h3 className="character-grid-card__name">{character.name}</h3>
                        <p className="character-grid-card__info">
                            {character.species} • {character.gender}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    )
}
