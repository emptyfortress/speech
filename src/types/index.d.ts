interface Chip {
	id: number
	label: string
	star?: boolean
	selected: boolean
	comment?: string
	value?: string
}

interface Logic {
	id: number
	label: string
	comment: string
	star: boolean
	selected: boolean
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

interface Column {
	id?: number
	name: string
	label: string
	field: string | ((row: any) => any)
	required?: boolean
	align?: 'left' | 'right' | 'center'
	sortable?: boolean
	sort?: (a: any, b: any, rowA: any, rowB: any) => number
	sortOrder?: 'ad' | 'da'
	format?: (val: any, row: any) => any
	style?: string | ((row: any) => string)
	classes?: string | ((row: any) => string)
	headerStyle?: string
	headerClasses?: string
}

interface RowCategory {
	id: number
	name: string
	call: string
	ant: string
	loud: string
	interrupt: string
	dynamics: any
	volume: any
	selected?: boolean
	classname?: string
}
