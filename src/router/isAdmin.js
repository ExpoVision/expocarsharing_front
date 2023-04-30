export default function isAdmin ({ next, store }) {
    if(store.getters['user/getUser'].role !== 'ADMIN'){
        return next({
           name: 'Home'
        })
    }
    return next()
}