import type { Character } from '../types/rickAndMorty'

interface CharacterCardProps {
    character: Character
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
    return (
        <article className="character-card">
            <img className="character-card__image" src={character.image} alt={character.name} />
            <div className="character-card__content">
                <h2 className="character-card__title">{character.name}</h2>
                <dl className="character-card__details">
                    <div>
                        <dt>Especie</dt>
                        <dd>{character.species || 'Desconocida'}</dd>
                    </div>
                    <div>
                        <dt>Estado</dt>
                        <dd>{character.status}</dd>
                    </div>
                    <div>
                        <dt>Origen</dt>
                        <dd>{character.origin?.name || 'Desconocido'}</dd>
                    </div>
                </dl>
            </div>
        </article>
    )
}
