import React from 'react';
import ReactHelmet from '../../Components/ReactHelmet/ReactHelmet';
import coverImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import './Menu.css';
import useMenu from '../../Hooks/useMenu';
import MenuCategory from '../Shared/MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const offer = menu?.filter(item => item.category === 'offered');
    const dessert = menu?.filter(item => item.category === 'dessert');
    const salad = menu?.filter(item => item.category === 'salad');
    const soup = menu?.filter(item => item.category === 'soup');
    const pizza = menu?.filter(item => item.category === 'pizza');
    const drinks = menu?.filter(item => item.category === 'drinks');

    // coverImg, coverTitle, coverSubTitle, items, subHeading, Heading, btnInfo


    return (
        <section className='menuSection'>
            <ReactHelmet title={'Menu'} />

            <MenuCategory
                coverImg = {coverImg}
                coverTitle = {'our menu'}
                coverSubTitle={'Would you like to try our dish?'}
                items = {offer}
                subHeading={'Dont Miss'}
                Heading={'Todays Offer'}
                btnInfo = {'ORDER YOUR FAVOURITE FOOD'}
            />

            <MenuCategory
                coverImg = {dessertImg}
                coverTitle = {'dessert'}
                coverSubTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem velit, voluptate accusamus nemo aspernatur?'}
                items = {dessert}
                btnInfo = {'ORDER YOUR FAVOURITE DESSERT'}
            />

            <MenuCategory
                coverImg = {saladImg}
                coverTitle = {'salad'}
                coverSubTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem velit, voluptate accusamus nemo aspernatur?'}
                items = {salad}
                btnInfo = {'ORDER YOUR FAVOURITE SALAD'}
            />

            <MenuCategory
                coverImg = {soupImg}
                coverTitle = {'soup'}
                coverSubTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem velit, voluptate accusamus nemo aspernatur?'}
                items = {soup}
                btnInfo = {'ORDER YOUR FAVOURITE SOUP'}
            />

            <MenuCategory
                coverImg = {pizzaImg}
                coverTitle = {'pizza'}
                coverSubTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem velit, voluptate accusamus nemo aspernatur?'}
                items = {pizza}
                btnInfo = {'ORDER YOUR FAVOURITE PIZZA'}
            />

            <MenuCategory
                coverImg = {pizzaImg}
                coverTitle = {'drinks'}
                coverSubTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem velit, voluptate accusamus nemo aspernatur?'}
                items = {drinks}
                btnInfo = {'ORDER YOUR FAVOURITE DRINKS'}
            />

        </section>
    );
};

export default Menu;