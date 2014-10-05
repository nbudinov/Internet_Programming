import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;

public class EchoClient {

	public final static String IP = "localhost";
	
	public static String handleClient( String date ) throws UnknownHostException, IOException
	{
		final Socket clientSocket = new Socket( IP, 44012 );
		
		final InputStream IS = clientSocket.getInputStream();
		final OutputStream OS = clientSocket.getOutputStream();
		
		final InputStreamReader inputReader = new InputStreamReader(IS);
		final BufferedReader in = new BufferedReader(inputReader);
		
		final PrintWriter writer = new PrintWriter(OS);
	
		writer.println(date);
		writer.flush();
		
		String result = in.readLine();
		//System.out.println(result);
		
		clientSocket.close();
		return result;
	}
	
	public static void main(String[] args) throws IOException {
		
		System.out.println(" Enter a date >> Year/Month/Day ");
		
		final InputStream input = System.in;
		final InputStreamReader InputReader = new InputStreamReader(input);
		final BufferedReader reader = new BufferedReader(InputReader);
		
		final String date = reader.readLine();
		//System.out.println(date);
		
		
		String response = handleClient(date);
		System.out.println(response + " days passed ");
	}
	
}
