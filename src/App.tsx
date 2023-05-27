import { useEffect, useState } from 'react';
import styles from './App.module.css';
import PasscodeSymbols from './PasscodeSymbols';
import Numpad from './Numpad';

const passcode = '1337';

function App() {
	const [signedIn, setSignedIn] = useState(false);
	const [pressedNumbers, setPressedNumber] = useState<number[]>([]);
	const [error, setError] = useState<boolean>(false);

	const handleClick = (num: number) => {
		if (pressedNumbers.length < passcode.length) {
			setPressedNumber((current) => [...current, num]);
		} else {
			setPressedNumber((current) => [
				...current.slice(-(passcode.length - 1)),
				num,
			]);
		}
	};

	useEffect(() => {
		if (pressedNumbers.length === 1) {
			setError(false);
		}
		if (pressedNumbers.length === passcode.length) {
			if (pressedNumbers.join('') === passcode) {
				console.log('Correkt');
				setSignedIn(true);
			} else {
				console.log('Incorrect');
				setError(true);
				setTimeout(() => {
					setPressedNumber([]);
				}, 1000);
				setTimeout(() => {
					setError(false);
				}, 200);
			}
		}
	}, [pressedNumbers]);

	return (
		<div className={styles.container}>
			<div
				className={styles.screen}
				style={
					error
						? { backgroundColor: 'firebrick' }
						: { backgroundColor: '#0d0d0f' }
				}
			>
				{signedIn ? (
					<div className={styles.success}>Signed in</div>
				) : (
					<>
						<div className={styles.text}>Touch ID or Enter Passcode</div>
						<PasscodeSymbols
							numberOfStars={passcode.length}
							pressedNumbersLength={pressedNumbers.length}
						/>
						<Numpad handleClick={handleClick} />
					</>
				)}
			</div>
		</div>
	);
}

export default App;
