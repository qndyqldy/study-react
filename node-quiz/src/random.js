import Chance from "chance";
const chance = new Chance();

/* chance를 이용해 무작위 이름을 생성해 반환 */
export function getRandomName() {
	return chance.name();
}

/* chance를 이용해 무작위 이메일을 생성해 반환 */
export function getRandomEmail() {
	return chance.email();
}

/* addredd */
export function getRandomAddress() {
	return chance.address();
}