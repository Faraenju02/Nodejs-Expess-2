import { Router } from "express";
import { methods as contactController } from "../controllers/contact.controller";

const router = Router()

//create contact
/**
 * @swagger
 * components:
 *  schemas:
 *      Users:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            description: the user name       
 *          age:
 *            type: integer
 *            description: the user age
 *          phone:
 *             type: string
 *             description: the user phone
 *          email:
 *             type: string
 *             description: the user email
 *        required: 
 *          - name
 *          - age
 *          - phone
 *          - email 
 *        example:
 *          name: javier gozalez
 *          age: 24
 *          phone: 532273
 *          email: examplea.com
 * 
 */

////////////////////////////////////////////////////

// get all contacts
/**
 * @swagger
 * /api/contacts:
 *  get:
 *      summary: Return all contacts
 *      tags: [Users]    
 *      responses:
 *          200:
 *              description: All contacts
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Users'
 *                          
 *                  
 *                  
 */

router.get("/", contactController.getContacts)

// get contact
/**
 * @swagger
 * /api/contacts/{id}:
 *  get:
 *      summary: Return contact
 *      tags: [Users] 
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            require: true
 *            description: the user id
 *      responses:
 *          200:
 *              description: All contacts
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Users'
 *          404:
 *              description: Contact not found
 *                          
 *                  
 *                  
 */

router.get("/:id", contactController.getContact)

// Add contact
/**
 * @swagger
 * /api/contacts:
 *  post:
 *      summary: create new contact
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: New contact created
 *                  
 */

router.post("/", contactController.addContact)

// Delete contact
/**
 * @swagger
 * /api/contacts/{id}:
 *  delete:
 *      summary: Delete contact
 *      tags: [Users] 
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            require: true
 *            description: the user id
 *      responses:
 *          200:
 *              description: Contact Deleted
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Users'
 *          404:
 *              description: Contact not found
 *                          
 *                  
 *                  
 */
router.delete("/:id", contactController.deleteContact)

// Update contact
/**
 * @swagger
 * /api/contacts/{id}:
 *  put:
 *      summary: Update contact
 *      tags: [Users] 
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            require: true
 *            description: the user id
 * 
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: Contact Updated
 *              
 *          404:
 *              description: Contact not found
 *                          
 *                  
 *                  
 */
router.put("/:id", contactController.updateContact)

export default router