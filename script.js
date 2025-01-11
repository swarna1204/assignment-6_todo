// storage.js

// TODO: Set item in localStorage
function setItemLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

// TODO: Get item from localStorage
function getItemLocalStorage(key) {
    return localStorage.getItem(key);
}

// TODO: Remove item from localStorage
function removeItemLocalStorage(key) {
    localStorage.removeItem(key);
}

// TODO: Clear all items from localStorage
function clearLocalStorage() {
    localStorage.clear();
}

// TODO: Add an object to localStorage
function setObjectLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

// TODO: Get an object from localStorage
function getObjectLocalStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// TODO: Set item in sessionStorage
function setItemSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}

// TODO: Get item from sessionStorage
function getItemSessionStorage(key) {
    return sessionStorage.getItem(key);
}

// TODO: Remove item from sessionStorage
function removeItemSessionStorage(key) {
    sessionStorage.removeItem(key);
}

// TODO: Clear all items from sessionStorage
function clearSessionStorage() {
    sessionStorage.clear();
}

// TODO: Add an object to sessionStorage
function setObjectSessionStorage(key, obj) {
    sessionStorage.setItem(key, JSON.stringify(obj));
}

// TODO: Get an object from sessionStorage
function getObjectSessionStorage(key) {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}
