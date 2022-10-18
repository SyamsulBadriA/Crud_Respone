const { Photo } = require("../models");

class PhotoController {
  static async getAllPhotos(req, res) {
    try {
      const dataPhotos = await Photo.findAll();
      res.status(200).json(dataPhotos);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getIdPhotos(req, res) {
    const photoId = req.params.id;
    try {
      const dataPhotos = await Photo.findOne({
        where: {
          id: photoId,
        },
      });
      if (dataPhotos == null) {
        res.status(400).json({ messgae: "data kosong" });
      }
      res.status(200).json(dataPhotos);
    } catch (error) {}
  }

  static async createPhotos(req, res, next) {
    const { tittle, caption, image_url } = req.body;
    try {
      const createPhotos = await Photo.create({
        tittle,
        caption,
        image_url,
      });
      res.status(201).json({ message: "success create Photo" });
    } catch (error) {
      res.status(500).json({ message: "data ada yang belum lengkap" });
    }
  }

  static async updatePhotos(req, res) {
    let id = req.params.id;
    const { tittle, caption, image_url } = req.body;
    let editData = {
      tittle,
      caption,
      image_url,
    };
    Photo.update(editData, {
      where: {
        id,
      },
      returning: true,
    });
    res.status(201).json({ message: "success update Photo" });
  }
  catch(error) {
    res.status(500).json(error);
  }

  static deletePhotoId(req, res) {
    let id = req.params.id;
    Photo.destroy({
      where: {
        id,
      },
    });
    res.status(201).json({ message: "delete photo success" });
  }
  catch(error) {
    res.status(500).json(error);
  }
}

module.exports = PhotoController;
