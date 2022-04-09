import React from 'react';
// import axios from 'axios';
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

    // const [clothing, setClothing] = useState()
    // useEffect(() => {
    //     const fetchData = async () => {
    //       const clothingResults = await axios.get('/', {
    //         withCredentials: true,
    //       });

    //        setClothing(clothingResults.data);
    //     };
    //     fetchData();
    //   }, []);

    

    return (
        <div className='mid'>
            <InventoryItem itemAttributes={headerAttributes} />
            {/* {clothing.map((item) => (
                <InventoryItem key={item.sku} itemAttributes={item} />
            ))} */}

            <Button>Export Data</Button>
        </div>
    );
}

export default InventoryList;