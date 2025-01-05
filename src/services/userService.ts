import prisma from "../config/database";

export const getUserById = async (id: number) => {
  return prisma.user.findUnique({ where: { id } });
};

export const getUsersByEmailDomain = async (domain: string) => {
  return prisma.user.findMany({
    where: { email: { endsWith: `@${domain}` } },
  });
};

export const getPaginatedUsers = async (page: number, pageSize: number) => {
  return prisma.user.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
};

export const getUserCount = async () => {
  return prisma.user.count();
};
