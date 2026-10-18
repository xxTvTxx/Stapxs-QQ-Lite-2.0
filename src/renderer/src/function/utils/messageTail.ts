export function getMessageTail(config: Record<string, unknown>): string {
    if (config.random_msg_tail === true) {
        if (typeof config.random_msg_tail_text !== 'string') return ''
        const candidates = config.random_msg_tail_text.split(/\r\n|\n|\r/).filter((line) => line.trim() !== '')
        if (candidates.length === 0) return ''
        return candidates[Math.floor(Math.random() * candidates.length)].replaceAll('\\n', '\n')
    }
    return typeof config.msg_taill === 'string' ? config.msg_taill.replaceAll('\\n', '\n') : ''
}
