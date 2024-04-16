```yml
jobs:
    job:
        runs-on: ubuntu-latest
        steps:
            -   id: send_message
                uses: akeylimepie/telegram-action@v1
                with:
                    token: ${{ secrets.TOKEN }}
                    chat_id: ${{ secrets.CHAT_ID }}
                    parse_mode: html
                    disable_notification: true
                    text: |
                        Mona the <a href="https://google.com">Octocat</a>

            -   run: |
                    echo "Message ID: ${{ steps.send_message.outputs.message_id }}"

```