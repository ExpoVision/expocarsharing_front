export default function isAuth ({ next, store }) {
    console.log(store.getters)
    if(!store.getters['user/isAuth']){
        return next({
           name: 'Home'
        })
    }
    return next()
}