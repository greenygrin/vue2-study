import bus from '../utils/bus.js'

// mixin
export default {
    // 재사용할 컴포넌트 옵션 & 로직
    // created() {
    //     bus.$emit('start:spinner');
    //     setTimeout(() => {
    //         this.$store.dispatch('FETCH_LIST', this.$route.name)
    //         .then(() => {
    //             bus.$emit('end:spinner');
    //         })
    //         .catch(error => console.log(error));
    //     }, 3000);
    // }
    mounted() {
        bus.$emit('end:spinner');
     }
}

// hoc
// export default function created() {
//     // 재사용할 컴포넌트 옵션
// }