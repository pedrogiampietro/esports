import { GamerBanner } from './components/Gamebanner'

import './styles/main.css'
import logoImg from './assets/logo.svg'

function App() {
	return (
		<div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
			<img src={logoImg} alt='' />

			<h1 className='text-6xl text-white font-black mt-20'>
				Seu duo está aqui!
			</h1>

			<div className='grid grid-cols-6 gap-6 mt-16'>
				<GamerBanner
					bannerUrl='/game-1.png'
					title='League of Legends'
					adsCount={5}
				/>
			</div>
		</div>
	)
}

export default App
