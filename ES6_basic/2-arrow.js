export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
      self.sanFranciscoNeighbosrhoods.push(newNeighborhood);
      return self.sanFranciscoNeighborhoods;
    };
  }
