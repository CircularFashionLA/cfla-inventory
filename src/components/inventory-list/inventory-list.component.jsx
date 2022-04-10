import React, {useState, useEffect} from 'react';
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

    const [isLoading, setIsLoading] = useState(true);
    const [clothing, setClothing] = useState([]);

    useEffect(() => {
        fetch(
          '/clothing'
        )
          .then(res => res.json())
          .then(response => {
            setClothing(response.results);
            setIsLoading(false);
          })
          .catch(error => console.log(error));
      }, []);

    

    return (
        <div className='mid'>
            <InventoryItem itemAttributes={headerAttributes} />
            {isLoading && <p>One Second, I'm still loading...</p>}
            {clothing.map((item) => (
                <InventoryItem key={item.attributes.sku} itemAttributes={item.attributes } />
            ))}

            <Button>Export Data</Button>
        </div>
    );
}

export default InventoryList;