export default function isAdmin ({ next, store }) {
    if(store.getters['user/getUserProfileInfo'].role !== 'admin'){
        return next({
           name: 'Home'
        })
    }
    return next()
}