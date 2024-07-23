import {onBeforeMount, onMounted, Ref, ref} from "vue";

export default (asides: Ref<{id: number, title: string}[]>) => {
	const activeMenu = ref<string | number>('')
	
	const contentRef = ref<HTMLElement | null>(null)
	
	onBeforeMount(() => {
		if (asides.value.length > 0) {
			const id = asides.value[0].id
			if (id !== undefined) {
				activeMenu.value = asides.value[0].id
			}
		}
	})
	
	const selectMenu = (value: string | number) => {
		if (value !== activeMenu.value) {
			activeMenu.value = value
		}
		if (contentRef.value) {
			const el = contentRef.value!
			const target = el.children[(value as number) - 1]
			if (target) {
				target.scrollIntoView({behavior: 'smooth'})
			}
		}
	}
	
	return {
		activeMenu,
		selectMenu,
		contentRef
	}
}