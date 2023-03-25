def on_received_number(receivedNumber):
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
    serial.write_number(0)
    basic.pause(750)
radio.on_received_number(on_received_number)

radio.set_group(1)
serial.redirect_to_usb()
basic.show_string("Started!")