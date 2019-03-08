export function selectTab(tabId){
    
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabId){

    const tabsToShow = {} //object

    tabId.forEach(e => tabsToShow[e] = true); // this notation "tabsToShow[e]" is the same of "{element1: true, element2: true}", where is adding the key in object

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }

}