import { ref, computed } from 'vue'

export default function useEventSpace() {
    const number = ref(4)
    const attending = ref(['juan', 'nugy', 'john'])

    const spaceLeft = computed(() => {
        return number.value - attending.value.length
    })

    function increaseNumber() {
        number.value++
    }
    return { number, increaseNumber, attending, spaceLeft }
}
