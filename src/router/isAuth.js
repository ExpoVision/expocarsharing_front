export default function isAuth ({ next, store }) {
    if(!store.getters['user/isAuth']){
        return next({
           name: 'Home'
        })
    }
    return next()
}