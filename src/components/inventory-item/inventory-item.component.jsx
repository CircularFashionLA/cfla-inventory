import React, { useState } from 'react';
import './inventory-item.styles.scss'

const InventoryItem = ({ itemAttributes }) => {


    const { category, sku, image, size, fit, fiber } = itemAttributes
    const [sizeStr, setSizeStr] = useState(() => {
        let str = ''
        for (const key in size) {
            if (size[key]) {
                str = str.concat(`${key}, `)
            }
        }
        return str.slice(0, -2)
    }
    )


    return (
        <div className='inventory-item'>
            <div className="inventory-item-image" style={{
                backgroundImage: `url("${image}")`,
            }}></div>
            <span className="inventory-item-category">{category}</span>
            <span className="inventory-item-sku">{sku}</span>
            <span className="inventory-item-size">{sizeStr}</span>
            <span className="inventory-item-fit">{fit}</span>
            <span className="inventory-item-fiber">{fiber}</span>

        </div>
    );
}

export default InventoryItem;