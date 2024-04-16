import { getBotToken, getMessageOptions } from './config.js'
import core from '@actions/core'

export async function action () {
    const botToken = getBotToken()
    const messageOptions = getMessageOptions()

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageOptions)
    })

    const json = await response.json()

    console.log(json)

    if (json.ok) {
        core.setOutput('message_id', json.result.message_id)
        core.setOutput('result', JSON.stringify(json.result))
    } else {
        core.setFailed(json.description)
    }
}