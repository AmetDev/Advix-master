import { useState } from 'react'
import Switch from 'react-switch'
import sun from '../../assets/sun.svg'
export const SwitchButton = () => {
	const [checked, setChecked] = useState(true)
	const handleChange = nextChecked => {
		setChecked(nextChecked)
	}
	console.log('checked', checked)

	return (
		<>
			<label htmlFor='small-radius-switch'>
				<Switch
					checked={checked}
					onChange={handleChange}
					handleDiameter={19}
					offColor='#212121'
					onColor='#DEDEDE'
					offHandleColor='#DEDEDE'
					onHandleColor='#212121'
					height={24}
					width={46}
					borderRadius={20}
					uncheckedIcon={
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100%',
								fontSize: 15,
								color: 'orange',
								paddingRight: 2,
							}}
						></div>
					}
					checkedIcon={''}
					uncheckedHandleIcon={
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100%',
								fontSize: 20,
							}}
						>
							☹
						</div>
					}
					checkedHandleIcon={
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								alignContent: 'center',
								height: '100%',
							}}
						>
							<img width={19} height={16} src={sun} alt='' srcset='' />
						</div>
					}
					className='react-switch'
					id='small-radius-switch'
				/>
			</label>
		</>
	)
}

/* styles.css */
