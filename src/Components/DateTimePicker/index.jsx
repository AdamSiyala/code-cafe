import React, { Component } from 'react'
import TimePicker from 'material-ui/TimePicker'
import DatePicker from 'material-ui/DatePicker'
import createDateTime from './createDateTime'

class DateTimePicker extends Component {
	contructor () {
		super()

		const now = new Date()

		this.state = {
			dateTime: this.props.defaultDateTime || now,
		}
	}

	render () {
		const now = new Date()

		return <div>

			<DatePicker
				minDate={now}
				defaultDate={this.state.dateTime}
				onChange={(event, date) => this.setState({ date })}
				/>

			<TimePicker
				pedantic={true}
				defaultTime={this.state.dateTime}
				onChange={(event, time) => this.setState({ time })}
				/>

		</div>
	}

	setDate (event, date) {
		const dateTime = createDateTime({
			date, time: this.state.dateTime,
		})

		this.setDateTime(dateTime)
	}

	setTime (event, time) {
		const dateTime = createDateTime({
			date: this.state.dateTime, time,
		})

		this.setDateTime(dateTime)
	}

	setDateTime (dateTime) {
		this.setState({dateTime})
		this.props.onChange(dateTime)
	}
}

DateTimePicker.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	defaultDateTime: React.PropTypes.object,
}

export default DateTimePicker
