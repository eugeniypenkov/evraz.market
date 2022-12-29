Feature('basket');

Scenario('First test',  ({ I }) => {

    I.amOnPage('https://evraz.market/');
    //1
    I.waitForVisible('[id="dropdownCatalogButton"]',10);
    I.click ('[id="dropdownCatalogButton"]');
    I.waitForVisible('[id="dropdown-menu-main-list"]',10);
    I.seeElement('[id="dropdown-menu-main-list"]');
    //2
    I.waitForVisible('//*[@class="dropdown-menu-item__content"]//*[@href="/metalloprokat/armatura/armatura_gladkaya/"]',10); //на странице три ссылки, сделать норм функцию возвращающую правильный элемент, ссылки закинуть в енумчики или через text()
    I.click ('//*[@class="dropdown-menu-item__content"]//*[@href="/metalloprokat/armatura/armatura_gladkaya/"]');
    I.waitForVisible('[class="catalog-page"]',10);//создать функцию loader(element){}
    I.seeElement('//h1[text()="Арматура гладкая в Москве "]');
    //3
    I.click('//*[contains(text(),"Арматура гладкая, 6 мм")]//ancestor::tr//*[text()="В корзину"]');//обернуть в функцию получение кнопки "В корзину"
    I.waitForElement('[class="product-page"]', 20);// В loader
    I.see('Арматура гладкая 6 А240 ГОСТ 34028-2016 в Москве'); //добавить как head к енумчикам каталога

    //4
    I.click('[id="bx_117848907_4475067_add_basket_link"]');
    //5
    //6
    //7
    //8
    //9
    //10
    //11
    //12
    //13
    //14
    //15
    //16
    //17
    //18
    //19
    //20
    //21
    //22
    //23
    //24
    //25
    //26
    //27
    //28
});

//Scenario('Second test',  ({ I }) => {
//});
