import s from './CardList.module.css'

export function CardList({children}) {
  return (
      <ul className={s.imageGallery}>
        {children}
        <button>Show more</button>
      </ul>
    )
}