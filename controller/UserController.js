const User = require('../model/user'); 


exports.createUser = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;
        const newUser = new User({ Name, Email, Password });
        await newUser.save();
        res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de l’utilisateur', details: error.message });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs', details: error.message });
    }
};


exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l’utilisateur', details: error.message });
    }
};


exports.updateUser = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { Name, Email, Password },
            { new: true } 
        );
        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
        res.status(200).json({ message: 'Utilisateur mis à jour avec succès', user });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de l’utilisateur', details: error.message });
    }
};


exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
        res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de l’utilisateur', details: error.message });
    }
};


