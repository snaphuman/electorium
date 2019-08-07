export default {
    data: function() {
        return {
            candidate: { }
        };
    },

    props: [ 'enableSubmit' ],

    watch: {
        candidate: function () {
            this.$emit('update:getCandidateData', this.candidate);
        }
    }
};
