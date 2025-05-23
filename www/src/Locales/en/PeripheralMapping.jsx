export default {
	'header-text': 'Peripheral Mapping',
	'sub-header-text': '',
	'pins-label': 'Pins',
	'pin-in-use': 'in use',
	'i2c-label': 'I\u00B2C',
	'i2c-desc-header': 'I\u00B2C Information',
	'i2c-description':
		'I\u00B2C is a two-wire interface used for accessory devices, such as displays, GPIO expansion, and sensors via the SDA and SCL lines.  The RP2040 supports two I\u00B2C controller blocks: I2C0 and I2C1.  The following are the supported GPIO pins for each block:',
	'spi-label': 'SPI',
	'spi-desc-header': 'SPI Information',
	'spi-description':
		'SPI is a four-wire interface used for accessory devices, such as displays, GPIO expansion, and sensors via a RX and TX data line, as well as a SCK clock line, and a CS sync/chip select line.  The RP2040 supports two SPI controller blocks: SPI0 and SPI1. The following are the supported GPIO pins for each block:',
	'usb-label': 'USB Host',
	'usb-desc-header': 'USB Host Information',
	'usb-description':
		'USB Host allows supported USB client devices to be used, such as keyboards, gamepads, or other devices.',
	'peripheral-toggle-unavailable':
		'Cannot Enable. Peripheral "{{name}}" unavailable. Enable it in the <0>Peripheral Mapping</0> section.',
	'pin-sda-label': 'SDA',
	'pin-scl-label': 'SCL',
	'option-speed-label': 'Speed',
	'option-speed-choice-100000-label': 'Normal',
	'option-speed-choice-400000-label': 'Fast',
	'option-speed-choice-1000000-label': 'Fast Plus',
	'pin-rx-label': 'RX',
	'pin-cs-label': 'CS',
	'pin-sck-label': 'SCK',
	'pin-tx-label': 'TX',
	'pin-dp-label': 'D+',
	'pin-enable5v-label': 'Enable 5V',
	'option-order-label': 'GPIO Pin Order',
	'option-order-choice-0-label': 'D+/D-',
	'option-order-choice-1-label': 'D-/D+',
};
