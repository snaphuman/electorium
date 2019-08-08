export default {

    props: [ 'enableSubmit', 'id' ],

    data: function() {
        return {
            candidate: { },
            studentId: this.id
        };
    },

    watch: {
        candidate: function () {
            this.$emit('update:getCandidateData', this.candidate);
        }
    },

    methods: {
        // this method only works when is called from
        // students list
        save() {
            console.log("actualizar", this.studentId);
        }
    },

    created () {
        console.log(this.studentId);
    }
};
