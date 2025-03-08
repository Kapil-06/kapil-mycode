import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Mails {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Set<String> box1 = new HashSet<>();
        Set<String> box2 = new HashSet<>();

        // Input for Box 1
        System.out.println("Enter all email IDs for Box 1 (separated by space or comma):");
        String input1 = scanner.nextLine().trim();
        String[] emails1 = input1.split("[ ,]+"); // Split by space or comma
        box1.addAll(Arrays.asList(emails1));

        // Input for Box 2
        System.out.println("Enter all email IDs for Box 2 (separated by space or comma):");
        String input2 = scanner.nextLine().trim();
        String[] emails2 = input2.split("[ , ]+"); // Split by space or comma
        box2.addAll(Arrays.asList(emails2));

        // Merge both boxes and remove duplicates
        Set<String> mergedBox = new HashSet<>(box1);
        mergedBox.addAll(box2);

        // Print the merged box without duplicates
        System.out.println("\n***********Merged Email Box (No Duplicates):*************");
        for (String email : mergedBox) {
            System.out.println(email+", ");
        }

        scanner.close();
    }
}