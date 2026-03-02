/*
* Copyright (c) AParovyshnaya 2020-2026
* 
* AParovyshnaya and theirs affiliates make no warranty of any kind
* with regard to this material. 
* 
* AParovyshnaya expressly disclaims all warranties as to the material, express, 
* and implied, including but not limited to the implied warranties of 
* merchantability, fitness for a particular purpose and non-infringement of third 
* party rights. 
* 
* In no event shall AParovyshnaya be liable to you or any other person for any damages, 
* including, without limitation, any direct, indirect, incidental or consequential 
* damages, expenses, lost profits, lost data or other damages arising out of the use, 
* misuse or inability to use the material and any derived software, even if AParovyshnaya, 
* their affiliate or an authorized dealer has been advised of the possibility of such damages. 
* 
*/

export function withLatinNoun1Tests() {
	data.data.push(
		{
			"name": "Девочка",
			"id": "latin1n_puella_ns",
			"grade": "latin_noun",
			"letters": ["1"],
			"full": "Puella cantat. [Девочка поёт.]",
			"test": "Puell<…> cantat. [Девочка поёт.]"
		},
		{
			"name": "Виллы",
			"id": "latin1n_villa_np",
			"grade": "latin_noun",
			"letters": ["1"],
			"full": "Villae sunt magnae. [Виллы большие.]",
			"test": "Vill<…> sunt magnae. [Виллы большие.]"
		},
		{
			"name": "Вода",
			"id": "latin1n_aqua_ns",
			"grade": "latin_noun",
			"letters": ["1"],
			"full": "Aqua fluit. [Вода течёт.]",
			"test": "Aqu<…> fluit. [Вода течёт.]"
		}
	);
}
