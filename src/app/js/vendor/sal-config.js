import sal from '../../vendor/sal'
import mq from '../mq'

mq(1024, changeThreshold)

function changeThreshold(mql) {
    mql.matches 
        ? sal({ once: false, threshold: .2 })
        : sal({ once: false, threshold: .5 })
}