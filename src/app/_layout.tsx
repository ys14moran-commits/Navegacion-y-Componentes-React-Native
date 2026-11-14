import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function LayoutPrincipal() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6C3B9A",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#6C3B9A",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Mi perfil",
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-circle-outline"
              size={size}
              color={String(color ?? "#999999")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="estudios"
        options={{
          title: "Formación académica",
          tabBarLabel: "Estudios",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="school-outline"
              size={size}
              color={String(color ?? "#999999")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiencia",
          tabBarLabel: "Experiencia",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="briefcase-outline"
              size={size}
              color={String(color ?? "#999999")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="hobbies"
        options={{
          title: "Mis pasatiempos",
          tabBarLabel: "Hobbies",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="game-controller-outline"
              size={size}
              color={String(color ?? "#999999")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
