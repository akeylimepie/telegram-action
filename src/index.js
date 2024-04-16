import core from '@actions/core'
import { action } from './action.js'

try {
    action()
} catch (error) {
    core.setFailed(error.message)
}
