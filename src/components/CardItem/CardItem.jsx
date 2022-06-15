import s from './CardItem.module.css'

export function CardItem({response}) {
  return (
    response.map((obj) =>
      < li key={obj.id} className={s.CardItem} >
        <img src={obj.photo} alt={obj.id} className={s.imageGalleryItemImage} />
        <span>{obj.name}</span>
        <span>{obj.position}</span>
        <span>{obj.email}</span>
        <span>{obj.phone}</span>
      </li>))
}