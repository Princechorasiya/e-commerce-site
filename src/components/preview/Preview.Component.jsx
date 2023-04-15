import React from 'react'
import CollectionItem from '../collection-item/CollectionItem.component';
import "./preview.scss"

const PreviewCollection = ({title,items}) => {
  return (
    <>
      <div className='collection-preview'>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items.filter((item, index) => index < 4)
          .map(({id,...otherCollectionProps}) => (
            <CollectionItem key={id} {...otherCollectionProps}/>
          ))}
          {/* //these components are executed again and again perfromance issues  */}


        </div>
      </div>
    
    </>
  )
}

export default PreviewCollection