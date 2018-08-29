'use strict';

/**
 * Accounttype.js controller
 *
 * @description: A set of functions called "actions" for managing `Accounttype`.
 */

module.exports = {

  /**
   * Retrieve accounttype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.accounttype.search(ctx.query);
    } else {
      return strapi.services.accounttype.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a accounttype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.accounttype.fetch(ctx.params);
  },

  /**
   * Count accounttype records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.accounttype.count(ctx.query);
  },

  /**
   * Create a/an accounttype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.accounttype.add(ctx.request.body);
  },

  /**
   * Update a/an accounttype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.accounttype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an accounttype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.accounttype.remove(ctx.params);
  },

  /**
   * Add relation to a/an accounttype record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.accounttype.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an accounttype record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.accounttype.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an accounttype record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.accounttype.removeRelation(ctx.params, ctx.request.body);
  }
};
