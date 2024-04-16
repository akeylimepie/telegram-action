import core from '@actions/core'

export function getBotToken () {
    return core.getInput('token', { required: true })
}

export function getMessageOptions () {
    const chat_id = core.getInput('chat_id', { required: true })
    const message_thread_id = core.getInput('message_thread_id')
    const text = core.getInput('text', { required: true })
    const parse_mode = core.getInput('parse_mode')
    const disable_notification = core.getBooleanInput('disable_notification')

    let options = { chat_id, text }

    if (message_thread_id)
        options = { ...options, message_thread_id }

    if (parse_mode)
        options = { ...options, parse_mode }

    if (disable_notification)
        options = { ...options, disable_notification }

    return options
}