import React, { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg';
import Cover from '../../Components/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../Components/FoodCard/FoodCard';
import useMenu from '../../Hooks/useMenu';
import OrderTab from '../../Components/OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import ReactHelmet from '../../Components/ReactHelmet/ReactHelmet';

const Order = () => {
    const { category} = useParams();
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const drinks = menu?.filter(item => item.category === 'drinks');
    const dessert = menu?.filter(item => item.category === 'dessert');
    const salad = menu?.filter(item => item.category === 'salad');
    const soup = menu?.filter(item => item.category === 'soup');
    const pizza = menu?.filter(item => item.category === 'pizza');

    return (
        <div className='oderSection'>
            <ReactHelmet title={'Order'}/>
            <Cover coverImg={orderCover} coverTitle={'Our shop'} coverSubTitle={'WOULD YOU LIKE TO TRY A DISH?'} />
            <div className='orderContainer my-20'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;