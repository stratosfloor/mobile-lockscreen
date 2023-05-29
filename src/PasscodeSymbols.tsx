import styles from './PasscodeSymbols.module.css';

type PasscodeSymbolsProps = {
	numberOfStars: number;
	pressedNumbersLength: number;
	state: string;
};

const PasscodeSymbols: React.FC<PasscodeSymbolsProps> = ({
	numberOfStars,
	pressedNumbersLength,
	state,
}) => {
	return (
		<div className={styles.container}>
			{[...Array(numberOfStars)].map((x, i) => (
				<span className={pressedNumbersLength >= i + 1 ? styles.pressed : ''}>
					*
				</span>
			))}
			{state === 'error' ? (
				<div className={styles.error}>Error message</div>
			) : null}
		</div>
	);
};

export default PasscodeSymbols;
