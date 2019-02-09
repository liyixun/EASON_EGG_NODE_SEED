
module.exports = {
  getMongoModel(modelName) {
      const mongoose = this.ctx.mongoose();
      const Schema = mongoose.Schema;
      switch (modelName) {
          case  'province':
              var schema = new Schema({
                  province: { type: String, default: '', trim: true },
                  city: { type: Array, default: [], trim: true },
                  type: { type: String, default: '', trim: true },
                  region: { type: String, default: '', trim: true }
              });
              break;
          default:
              break;
      }
      let model = mongoose.model(modelName, schema);
      return model;
  }
};
