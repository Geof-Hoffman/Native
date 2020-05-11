<Modal
animationType={'slide'}
transparent={false}
visible={this.state.showModal}
onRequestClose={() => this.toggleModal()}>
<View style={styles.modal}>
    <Text style={styles.modalTitle}>Search Campsite Reservations</Text>
    <Text style={styles.modalText}>Number of Campers: {this.state.campers}</Text>
    <Text style={styles.modalText}>Hike-In?: {this.state.hikeIn ? 'Yes' : 'No'}</Text>
    <Text style={styles.modalText}>Date: {this.state.date}</Text>
    <Button
        onPress={() => {
            this.toggleModal();
            this.resetForm();
        }}
        color='#5637DD'
        title='Close'
    />
</View>
</Modal>