import { useEffect, useState } from 'react';
import styles from './App.module.css';
import PasscodeSymbols from './PasscodeSymbols';
import Numpad from './Numpad';

const passcode = '1337';
type States = 'typing' | 'error' | 'signedin';

function App() {
	const [passcodeState, setPasscodeState] = useState<States>('typing');
	const [pressedNumbers, setPressedNumber] = useState<number[]>([]);

	const handleClick = (num: number) => {
		setPressedNumber((current) => [...current, num]);
	};

	useEffect(() => {
		if (pressedNumbers.length === 1) {
			setPasscodeState('typing');
		}
		if (pressedNumbers.length !== passcode.length) return;

		if (pressedNumbers.join('') === passcode) {
			setPasscodeState('signedin');
		} else {
			setPasscodeState('error');
			setTimeout(() => {
				setPressedNumber([]);
			}, 100);
		}
	}, [pressedNumbers]);

	return (
		<div className={styles.container}>
			<div className={styles.screen}>
				{passcodeState === 'signedin' ? (
					<div className={styles.success}>Signed in</div>
				) : (
					<>
						<div className={styles.text}>Touch ID or Enter Passcode</div>
						<PasscodeSymbols
							numberOfStars={passcode.length}
							pressedNumbersLength={pressedNumbers.length}
							state={passcodeState}
						/>
						<Numpad handleClick={handleClick} />
					</>
				)}
			</div>
		</div>
	);
}

export default App;
