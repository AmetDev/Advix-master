import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Channels from './components/Channels/Channels'
import MainLayout from './components/HeaderOutlet/MainLayout'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/channels' element={<Channels />} />
					{/* <Route path='/channels/:id' element={<ChannelDetail/>} /> */}
				</Route>
			</Routes>
		</>
	)
}

export default App
