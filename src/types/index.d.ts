interface Chip {
	id: number
	label: string
	star: boolean
	selected: boolean
	comment?: string
	value?: string
}

interface Logic {
	id: number
	label: string
	star: boolean
	selected: boolean
	comment: string
	value?: string
}

interface Logic {
	id: number
	label: string
	comment: string
	star: boolean
	active: boolean
}

interface Condition {
	id: number
	condition: ConditionEnum
	mod1: string
	mod2: string
}

interface List {
	id: number
	list: Condition[]
}
