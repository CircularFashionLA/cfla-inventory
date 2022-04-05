import React from 'react';
import { Button } from 'react-bootstrap';
import InventoryItem from '../inventory-item/inventory-item.component';

const InventoryList = (props) => {
    const headerAttributes = {
        category: 'Category',
        sku: "SKU",
        image: '',
        size: 'Size',
        fit: 'Fit',
        fiber: 'Fiber'
    }

    const exampleData = [
        {
            category: 'Jacket',
            sku: "1J",
            image: 'https://static.wixstatic.com/media/3341df_ab651e1041ef44abba0e16827fae6881~mv2.jpg/v1/fill/w_315,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/MFerJacketKyrsten_edited.jpg',
            size: {
                xs: false,
                s: false,
                m: true,
                l: false,
                xl: false,
                twoX: false,
                threeX: false,
            },
            fit: 'Tight',
            fiber: 'Cotton'
        },
        {
            category: 'Jacket',
            sku: "2J",
            image: 'https://static.wixstatic.com/media/3341df_5e93c6f71d1c4450a8a220c52cb3a28e~mv2.jpg/v1/fill/w_315,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/MFerSweatshirtpurple.jpg',
            size: {
                xs: false,
                s: true,
                m: true,
                l: false,
                xl: false,
                twoX: false,
                threeX: false,
            },
            fit: 'Loose',
            fiber: 'Cotton'
        },
        {
            category: 'Shirt',
            sku: "1S",
            image: 'https://static.wixstatic.com/media/4a2a16_d9748879d0904942b91f3ff2a3340e80~mv2.jpg/v1/fill/w_374,h_374,al_c,q_80,usm_0.66_1.00_0.01/4a2a16_d9748879d0904942b91f3ff2a3340e80~mv2.webp',
            size: {
                xs: false,
                s: false,
                m: true,
                l: true,
                xl: false,
                twoX: false,
                threeX: false,
            },
            fit: 'Tight',
            fiber: 'Polyester'
        }
    ]
    return (
        <div className='mid'>
            <InventoryItem itemAttributes={headerAttributes} />
            {exampleData.map((item) => (
                <InventoryItem key={item.sku} itemAttributes={item} />
            ))}

            <Button>Export Data</Button>
        </div>
    );
}

export default InventoryList;