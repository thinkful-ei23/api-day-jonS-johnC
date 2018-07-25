'use strict'
/* global $ shoppingList, store, api */

const api = (function(){
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Jon'

    const getItems = function(callback){
        callback('api module works!')
    }
return {
    getItems,
}

}());